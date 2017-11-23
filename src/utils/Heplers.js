export function LOG(context, message) {
    console.log([context.constructor.name], " ----- " + message + " ----- ");
}