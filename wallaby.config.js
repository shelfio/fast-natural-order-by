export default function () {
  return {
    autoDetect: true,
    env: {
      params: {
        env: 'TZ=UTC',
        runner: '--experimental-vm-modules',
      },
    },
  };
}
