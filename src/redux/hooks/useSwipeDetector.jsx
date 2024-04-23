function useSwipeDetector({ rightSwipe, leftSwipe }) {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
        if (touchendX < touchstartX) rightSwipe();
        if (touchendX > touchstartX) leftSwipe();
    }

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    })

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
    })
}

export default useSwipeDetector;