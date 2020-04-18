import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  eventHandler: EventHandler;
  url: string;
  clazz: string;
  constructor(eventHandler: EventHandler, clazz: string) {
    this.clazz = clazz;
    this.eventHandler = eventHandler;
  }

  abstract createAction();

  bind() {
    const action = this.createAction();

    this.eventHandler.addEventListennerToClass(this.clazz, "click", action);
  }
}
