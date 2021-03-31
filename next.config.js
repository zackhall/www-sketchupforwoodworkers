module.exports = {
  async rewrites() {
    return [
      {
        source: '/tutorials/getting-started-part-1.html',
        destination: '/tutorials/getting-started-part-1',
      },
      {
        source: '/tutorials/getting-started-part-2.html',
        destination: '/tutorials/getting-started-part-2',
      },
      {
        source: '/tutorials/dados-rabbets-grooves.html',
        destination: '/tutorials/dados-rabbets-grooves',
      },
      {
        source: '/tutorials/curves-moulding-outliner.html',
        destination: '/tutorials/curves-moulding-outliner',
      },
      {
        source: '/tutorials/moulding-revisited.html',
        destination: '/tutorials/moulding-revisited',
      },
      {
        source: '/tutorials/joints.html',
        destination: '/tutorials/joints',
      },
      {
        source: '/tutorials/dimensions-printing.html',
        destination: '/tutorials/dimensions-printing',
      },
    ]
  },
}
