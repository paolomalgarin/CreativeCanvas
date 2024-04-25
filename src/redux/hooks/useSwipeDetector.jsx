import { useEffect } from 'react';

function useSwipeDetector({ onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown }) {

    const touchArea = document.documentElement;

    let mouseX, initialX = 0;
    let mouseY, initialY = 0;
    let isSwiped;

    //eventi?
    let events = {
        mouse: {
            down: "mousedown",
            move: "mousemove",
            up: "mouseup",
        },
        touch: {
            down: "touchstart",
            move: "touchmove",
            up: "touchend",
        },
    };

    let deviceType = "";

    const isTouchDevice = () => {
        try {
            //proviamo ad aggiungere i touch events (falliranno x desktop)
            document.createEvent("TouchEvent");
            deviceType = "touch";
            return true;
        }
        catch (e) {
            deviceType = "mouse";
            return false;
        }
    };

    // console.log("IsTouchDevice: " + isTouchDevice());

    //per avere le posizioni esatte di mousetouch
    const getXY = (e) => {
        mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX);
        mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY);
    }

    isTouchDevice(); // ?? https://www.youtube.com/watch?v=FuU0CMvLunE

    //swipe start
    touchArea.addEventListener(events[deviceType].down, (event) => {
        isSwiped = true;
        //ottengo le posizioni di start
        getXY(event);
        initialX = mouseX;
        initialY = mouseY;
    });

    //mousemove / touchmove
    touchArea.addEventListener(events[deviceType].move, (event) => {
        const minSwipeDistance = 20;

        if (!isTouchDevice())
            event.preventDefault();
        if (isSwiped) {
            getXY(event);
            let diffX = mouseX - initialX;
            let diffY = mouseY - initialY;
            if (Math.abs(diffY) > Math.abs(diffX)) {  //controllo che tipo di swipe è
                if (diffY > minSwipeDistance) {
                    // ----------------------------------> swipe down !
                    // console.log("swiped down");
                    onSwipeDown();
                }
                else if (diffY < minSwipeDistance) {
                    // ----------------------------------> swipe up !
                    // console.log("swiped up");
                    onSwipeUp();
                }
            } else {

                if (diffX > minSwipeDistance) {
                    // ----------------------------------> swipe right !
                    // console.log("swiped right");
                    onSwipeRight();
                }
                else if (diffX < minSwipeDistance) {
                    // ----------------------------------> swipe left !
                    // console.log("swiped left");
                    onSwipeLeft();
                }
            }
        }
    });


    //stop drawing (tolgo isSwiped)
    touchArea.addEventListener(events[deviceType].up, () => {
        isSwiped = false;
    });

    touchArea.addEventListener("mouseleave", () => {
        isSwiped = false;
    });

    Window.onload = () => {
        isSwiped = false;
    }
}

export default useSwipeDetector;