import React, { memo, useEffect, useState } from 'react';
import { Wrapper } from './Loading.styled';

const LoadingComponent = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    let words = ['kSync '],
      part,
      i = 0,
      offset = 0,
      len = words.length,
      forwards = true,
      skip_count = 0,
      skip_delay = 8,
      speed = 150;

    const timerText = setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset == 0) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = true;
            i++;
            offset = 0;
            skip_count = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      if (part.length === 0) {
        setText(part);
      } else {
        setText(part + ' ');
      }
    }, speed);
    return () => {
      clearInterval(timerText);
    };
  }, []);
  return (
    <Wrapper id="loading">
      <div className="zera-logo">z{text}era</div>
    </Wrapper>
  );
};

export const Loading = memo(LoadingComponent);

export default Loading;
