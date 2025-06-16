import Typography from '@mui/material/Typography';
import {BadgeProps} from '@/components/Badge/Badge.props';

export default function Badge({text, children}: BadgeProps) {
    if (!text) {
        return null;
    }

    return (
        <Typography sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            fontSize: 16,
            color: 'text.secondary',
            whiteSpace: 'nowrap',
        }}>
            {children && <span style={{
                width: '16px',
                flexShrink: 0,
            }}>
                {children}
            </span>}
            {text}
        </Typography>
    );
}