function useSwipeDetector({ onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown }) {
    var touchstartX = 0;
    var touchstartY = 0;
    var touchendX = 0;
    var touchendY = 0;

    var gesuredZone = document.documentElement;

    gesuredZone.addEventListener('touchstart', (event) => {
        touchstartX = event.touches[0].clientX;
        touchstartY = event.touches[0].clientY;
    }, false);

    gesuredZone.addEventListener('touchend', (event) => {
        if (event.touches.length === 0) return; // No touches remaining
        touchendX = event.changedTouches[0].clientX;
        touchendY = event.changedTouches[0].clientY;
        handleGesture();
    }, false);

    function handleGesture() {
        var deltaX = touchendX - touchstartX;
        var deltaY = touchendY - touchstartY;
        var minDistance = 50; // Minimum distance required for swipe

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (Math.abs(deltaX) > minDistance) {
                if (deltaX > 0 && onSwipeRight) {
                    onSwipeRight();
                } else if (deltaX < 0 && onSwipeLeft) {
                    onSwipeLeft();
                }
            }
        } else {
            // Vertical swipe
            if (Math.abs(deltaY) > minDistance) {
                if (deltaY > 0 && onSwipeDown) {
                    onSwipeDown();
                } else if (deltaY < 0 && onSwipeUp) {
                    onSwipeUp();
                }
            }
        }
    }
}

export default useSwipeDetector;