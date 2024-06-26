import { useEffect, useState } from "react";

export default function useGamepad() {
  const [gamepadId, setGamepadId] = useState(null);

  const [atLeastOnePressed, setAtLeastOnePressed] = useState(false);
  const [axisLeftX, setAxisLeftX] = useState(0);
  const [axisLeftY, setAxisLeftY] = useState(0);

  const [axisRightX, setAxisRightX] = useState(0);
  const [axisRightY, setAxisRightY] = useState(0);

  const [lsPressed, setLsPressed] = useState(false);
  const [rsPressed, setRsPressed] = useState(false);

  const [aPressed, setAPressed] = useState(false);
  const [bPressed, setBPressed] = useState(false);
  const [xPressed, setXPressed] = useState(false);
  const [yPressed, setYPressed] = useState(false);

  const [lPressed, setLPressed] = useState(false);
  const [rPressed, setRPressed] = useState(false);
  const [ltPressed, setLtPressed] = useState(false);
  const [rtPressed, setRtPressed] = useState(false);

  const [dPad, setDPad] = useState(0);
  const [selectPressed, setSelectPressed] = useState(false);
  const [startPressed, setStartPressed] = useState(false);

  const cargarGamepad = () => {
    setInterval(() => {
      const controller = navigator.getGamepads()[0];
      // console.log("controller", controller);

      setGamepadId(controller?.id);
      // console.log("controller ID:", controller?.id);

      if (controller) {
        setAxisLeftX(controller.axes[0]);

        if (gamepadId === "Unknown Gamepad (Vendor: 000e Product: 3412)") {
          setAxisLeftY(controller.axes[1]);

          setLsPressed(controller.buttons[13].pressed);
          setRsPressed(controller.buttons[14].pressed);

          setAPressed(controller.buttons[0].pressed);
          setBPressed(controller.buttons[1].pressed);
          setXPressed(controller.buttons[3].pressed);
          setYPressed(controller.buttons[4].pressed);

          setSelectPressed(controller.buttons[10].pressed);
          setStartPressed(controller.buttons[11].pressed);
        } else {
          setAxisLeftY(controller.axes[3]);
          setLsPressed(controller.buttons[10].pressed);
          setRsPressed(controller.buttons[11].pressed);
        }

        setAxisRightX(controller.axes[2]);
        setAxisRightY(controller.axes[5]);

        setAPressed(controller.buttons[0].pressed);
        setBPressed(controller.buttons[1].pressed);
        setXPressed(controller.buttons[2].pressed);
        setYPressed(controller.buttons[3].pressed);

        setLPressed(controller.buttons[6].pressed);
        setRPressed(controller.buttons[7].pressed);
        setLtPressed(controller.buttons[8].pressed);
        setRtPressed(controller.buttons[9].pressed);

        setDPad(controller.axes[9]); // DPAD
        setSelectPressed(controller.buttons[13].pressed);
        setStartPressed(controller.buttons[14].pressed);

        controller.buttons.forEach((button) => {
          if (button.pressed) {
            // console.log(`Button ${index} pressed`);
          }
        });
        const isAtLeastOnePressed = controller.buttons.some(
          (button) => button.pressed
        );
        setAtLeastOnePressed(isAtLeastOnePressed);
      }
    }, 200);
  };

  useEffect(() => {
    // console.log("useEffect useGamepad  ");
    cargarGamepad();
  }, []);

  return {
    atLeastOnePressed,
    axisLeftX,
    axisLeftY,
    axisRightX,
    axisRightY,
    lsPressed,
    rsPressed,
    aPressed,
    bPressed,
    xPressed,
    yPressed,
    lPressed,
    rPressed,
    ltPressed,
    rtPressed,
    dPad,
    selectPressed,
    startPressed,
  };
}
