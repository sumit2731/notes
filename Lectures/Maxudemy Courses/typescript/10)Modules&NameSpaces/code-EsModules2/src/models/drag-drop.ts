export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
    /**
     * @This is to signal browser and javacsript that
     * the thing you are dragging over is a valid drag target. If you dnt do right
     * thing in drag over handler, then dropping will not be possible
     */
    dragOverHandler(event: DragEvent): void;
    /**
     * @It is called to handle actual drop
     */
    dropHandler(event: DragEvent): void;
    /**
     * @It can useful for  example, if we are for example, giving some visual feedback
     * to the user when he or she drag something over box like change background color
     * for example. if actual drop does not happen then we can use dragLeave handler to
     * revert our visual update
     */
    dragLeaveHandler(event: DragEvent): void;
}
