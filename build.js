process.env.ASTRO_TELEMETRY_DISABLED = '1';
import('astro').then(({ build }) => {
  build({}).catch((err) => {
    console.error(err);
    process.exit(1);
  });
});
