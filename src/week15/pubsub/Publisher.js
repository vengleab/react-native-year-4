class Publisher {
  subscribers = [];
  addSubscriber(sub) {
    this.subscribers.push(sub);
  }

  removeSubscriber(sub) {
    const index = this.subscribers.indexOf(sub);
    this.subscribers.splice(index, 1);
  }

  notify(channel, data) {
    // tell subscriber to do sth
    console.log('Please do sth');
    this.subscribers.forEach(sub => {
      if (sub.channel === channel) {
        sub.onNotify(data);
      }
    });
  }
}

const eventPublisher = new Publisher();

export default eventPublisher;
