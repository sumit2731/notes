/* 
what is eventLoop, macro queue.
when one task is executed and other one comes, that tasks is queued.tasks in queue are excuted in first come first serve basis.
    Ex Of Tasks -
        executing a downloaded scriped
        when user moves mouse, disptaching event and executing event handlers
        updating DOM
    if new task comes and current tasks is being executed then - 
    ex - when scripted is executed and user moves mouse,
    task to dispatch event and execute event handlers is queued.also even rendering is a task, so redering is even block until
    current task is xeceuted and it is added to queue. tasks in queue are executed in first come,first serve basis. see figure 1.

*/

/**
 * Code snippet based on above theory -
 * 
 *  a)splitting a CPU hungry tasks so that page handles other tasks in between.
 *  b)progress indication. intermittent values are updated in DOM
 *  c)doing something after event - dispatching custom event when DOM event has bubbled through out the DOM.
 */

/**
 * MacroTask and MicroTask - we have 2 types of queues.
 * 
 * Microtasks come solely from our code.If we want to add a function to microQueue use queueMicroTask(func)
 * 
 * Immediately after every macrotask, the engine executes all tasks from microtask queue, prior to running any other macrotasks 
 *  or rendering or anything else.All microtasks are completed before any other event handling or rendering or any other macrotask
 * takes place.
 * 
 * That’s important, as it guarantees that the application environment is basically the same (no mouse coordinate changes, no new 
 * network data, etc) between microtasks.
 * 
 * macroTask -
 *  setTimeout
 *  setInterval
 *  browser rendering
 *  event dispatch and calling event handlers
 * 
 * microTask -
 *  mutation observer
 *  promise code - then, catch, finally and await
 *  other techniques based on Promise such as the fetch API
 *  browser garbage collection
 */