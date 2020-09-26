class Subscriber {
  constructor(channel) {
    this.channel = channel;
  }

  subscribe(publisher, event) {
    this.publisher = publisher;
    this.publisher.addSubscriber(this);
    this.event = event;
  }

  unsubscribe() {
    this.publisher.removeSubscriber(this);
  }

  onNotify(data) {
    // do sth
    this.event(data);
  }
}

export default Subscriber;
