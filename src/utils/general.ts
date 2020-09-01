import humanizeDuration from 'humanize-duration';

function zeroOffset(value: number): string {
  let r = '';
  if (value < 10) {
    r = `0${value}`;
  } else {
    r = `${value}`;
  }
  return r;
}

const shortHumanizer = humanizeDuration.humanizer({
  largest: 1,
  spacer: '',
  language: 'shortEn',
  languages: {
    shortEn: {
      y: () => 'y',
      mo: () => 'mo',
      w: () => 'w',
      d: () => 'd',
      h: () => 'h',
      m: () => 'm',
      s: () => 's',
      ms: () => 'ms',
    },
  },
});

export default {
  zeroOffset,
  shortHumanizer,
};
