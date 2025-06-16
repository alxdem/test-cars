import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {ProductCardProps} from '@/components/ProductCard/ProductCard.props';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import colorsIcon from '@iconify-icons/mdi/invert-colors';
import petrolIcon from '@iconify-icons/mdi/petrol';
import gearIcon from '@iconify-icons/mdi/gear';
import fileIcon from '@iconify-icons/mdi/file-document';
import runIcon from '@iconify-icons/mdi/car-speed-limiter';
import Badge from '@/components/Badge/Badge';
import Box from '@mui/material/Box';
import Image from 'next/image';

export default function ProductCard({
                                        price,
                                        modification_id,
                                        color,
                                        year,
                                        engine_type,
                                        image,
                                        run,
                                        folder_id,
                                        mark_id,
                                        gearbox,
                                        isPriority,
                                    }: ProductCardProps) {
    const name = `${mark_id} ${folder_id}`;
    const localPrice = `${price.toLocaleString('ru-RU')} ₽`;
    const localRun = run ? `${run.toLocaleString('ru-RU')} км` : '';

    return (
        <Card sx={{
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                alignItems: {
                    sm: 'center',
                    md: 'stretch'
                }
            }}>
                <Image
                    src={image}
                    width={650}
                    height={500}
                    alt={name}
                    priority={isPriority}
                    sizes='(max-width: 600px) 534px,
                        (max-width: 900px) 618px,
                        (max-width: 1200px) 480px,
                        (max-width: 1536px) 416px,
                        356px'
                />
                <Typography gutterBottom sx={{
                    color: 'text.primary',
                    fontSize: 18,
                    fontWeight: 700,
                }}>
                    {name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 16 }}>
                    {localPrice}
                </Typography>
                <Badge text={modification_id} />
                <Box sx={{
                    display: 'flex',
                    gap: 1.5,
                    flexGrow: 1,
                    color: 'text.secondary',
                    fontSize: 16,
                }}>
                    <Badge text={localRun}>
                        <Icon icon={runIcon} />
                    </Badge>
                    <Badge text={gearbox}>
                        <Icon icon={gearIcon} />
                    </Badge>
                </Box>
                <Typography
                    component='div'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'text.secondary',
                    }}
                >

                    <Badge text={year.toString()}>
                        <Icon icon={fileIcon} />
                    </Badge>
                    <Badge text={engine_type}>
                        <Icon icon={petrolIcon} />
                    </Badge>
                    <Badge text={color}>
                        <Icon icon={colorsIcon} />
                    </Badge>
                </Typography>
            </CardContent>
            <CardActions sx={{padding: 2}}>
                <Button variant='contained' fullWidth>Купить</Button>
            </CardActions>
        </Card>
    );
}