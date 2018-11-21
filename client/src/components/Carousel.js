import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1542785298-6a1100c89bd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765d87bccffb11ee6ad52b36d0cb6216&auto=format&fit=crop&w=634&q=80',
    altText: 'Dexter',
    caption: 'Red Mountain'
  },
  {
    src: 'https://images.unsplash.com/photo-1534987658209-443e1e80c443?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a3fdbd68e07e540d6e7b1080d017c6f&auto=format&fit=crop&w=816&q=80',
    altText: '',
    caption: 'Nepal'
  },
  {
    src: 'https://images.unsplash.com/photo-1502318217862-aa4e294ba657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6531ba04dfd9f5f5cf2eadb42cc0f404&auto=format&fit=crop&w=658&q=80',
    altText: '',
    caption: 'Stone Mountain'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Example;