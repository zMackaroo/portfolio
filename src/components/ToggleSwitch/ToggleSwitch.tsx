import { useState, useRef } from "react";
import "./ToggleSwitch.css";

interface ToggleSwitchProps {
  onToggle?: (isOn: boolean) => void;
  initialState?: boolean;
}

function ToggleSwitch({ onToggle, initialState = false }: ToggleSwitchProps) {
  const [isOn, setIsOn] = useState(initialState);
  const toggleRef = useRef<HTMLDivElement>(null);

  const createElegantThemeTransition = (isDarkMode: boolean) => {
    // Prevent multiple transitions
    if (document.body.classList.contains("theme-transitioning")) {
      return;
    }

    // Apply theme FIRST to prevent flashing
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    document.body.classList.add("theme-transitioning");

    // Create refined overlay with better gradients
    const overlay = document.createElement("div");
    overlay.className = "theme-transition-overlay";
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      background: ${
        isDarkMode
          ? "radial-gradient(circle at center, rgba(0,0,0,0.85) 0%, rgba(15,15,15,0.7) 40%, rgba(0,0,0,0.9) 100%)"
          : "radial-gradient(circle at center, rgba(255,255,255,0.85) 0%, rgba(248,248,248,0.7) 40%, rgba(255,255,255,0.9) 100%)"
      };
      backdrop-filter: blur(1px) saturate(1.1);
      transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      will-change: opacity;
    `;

    document.body.appendChild(overlay);

    // Coordinated animation sequence
    const animateSequence = async () => {
      // Phase 1: Quick overlay fade-in (100ms)
      requestAnimationFrame(() => {
        overlay.style.opacity = "0.3";
      });

      // Phase 2: Start element transitions immediately (no delay)
      const elements = document.querySelectorAll(
        "div, section, article, header, footer, main, nav, aside, h1, h2, h3, h4, h5, h6, p, span, a, button"
      );

      elements.forEach((element, index) => {
        // Much faster stagger - only 5ms increments
        const delay = Math.min(index * 5, 200); // Cap at 200ms total

        setTimeout(() => {
          element.classList.add("theme-morphing");

          // Apply theme attribute
          if (isDarkMode) {
            element.setAttribute("data-theme", "dark");
          } else {
            element.removeAttribute("data-theme");
          }

          // Quick cleanup
          setTimeout(() => {
            element.classList.remove("theme-morphing");
          }, 250); // Faster cleanup
        }, delay);
      });

      // Phase 3: Peak overlay at 150ms
      setTimeout(() => {
        overlay.style.opacity = "1";
      }, 150);

      // Phase 4: Start overlay fade-out at 400ms
      setTimeout(() => {
        overlay.style.opacity = "0";
      }, 400);

      // Phase 5: Complete cleanup at 700ms
      setTimeout(() => {
        document.body.classList.remove("theme-transitioning");
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
      }, 700);
    };

    animateSequence();
  };

  const createModernTransition = () => {
    // Create elegant theme transition
    createElegantThemeTransition(!isOn);
  };

  const handleToggle = () => {
    createModernTransition();
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  return (
    <div className="toggle-switch" onClick={handleToggle} ref={toggleRef}>
      <div className={`toggle-switch-slider ${isOn ? "on" : "off"}`}>
        <div className="toggle-switch-knob">
          <span className={`toggle-icon ${isOn ? "moon-icon" : "sun-icon"}`}>
            {isOn ? "🌙" : "☀️"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
