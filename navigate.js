export default xs => ({
  next: cursor =>
    xs[cursor >= xs.length - 1 ? 0 : cursor + 1],
  prev: cursor =>
    xs[cursor <= 0 ? xs.length - 1 : cursor - 1],
});
