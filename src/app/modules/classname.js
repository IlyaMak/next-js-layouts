const cnCommon = (styles, ...classNames) => classNames.map((c) => styles[c]).join(' ');

export default cnCommon;