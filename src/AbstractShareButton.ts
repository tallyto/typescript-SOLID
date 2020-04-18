import EventHandler from "./EventHandler";
export default abstract class AbstractShareButton {
  eventHandler: EventHandler;
  url: string;
  clazz: string;
  constructor(clazz: string, url: string) {
    this.clazz = clazz;
    this.url = url;
    this.eventHandler = new EventHandler();
  }

  abstract createLink(): string;

  bind(clazz: string, socialNetwork: string) {
    const link = this.createLink();

    this.eventHandler.addEventListennerToClass(this.clazz, "click", () =>
      window.open(link)
    );
  }
}
