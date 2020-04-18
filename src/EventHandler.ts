export default interface EventHandler {
  addEventListennerToClass(clazz: string, event: string, fn: any);
}
