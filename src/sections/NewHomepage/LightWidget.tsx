import { Container } from '@mui/material';

export function LightWidget() {
  return (
    <Container sx={{ py: 4, overflow: 'hidden' }}>
      <iframe
        title="Instagram Feed"
        scrolling="no"
        src="https://cdn.lightwidget.com/widgets/e61db449f0b2503c8dd11d8a108ab838.html"
        className="lightwidget-widget"
        style={{ width: '100%', border: 0, overflow: 'hidden' }}
      />
    </Container>
  );
}
