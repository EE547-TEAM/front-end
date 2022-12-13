import { gql, useQuery } from "@apollo/client";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { PRODUCTION_BY_ID } from "../../graphql/apis"; 
import { useRouter } from 'next/router'

export default function ProductItem({ pid, ...prop }) {

    const { data, loading, error } = useQuery(gql(PRODUCTION_BY_ID), {
        variables: { pid }
    });

    const router = useRouter();

    if (loading)
        return null;
        

    const { production } = data;

    return (
        <Card sx={{ maxWidth: 345 }} {...prop}>
            <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {production.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {production.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Condition: {production.condition}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => {
                    router.push(`/production/${production._id}`)
                }}>Detail</Button>
            </CardActions>
        </Card>
    )
}