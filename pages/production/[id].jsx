

import { useQuery } from '@apollo/client';
import { Button, CardMedia, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router'
import { useCallback } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { ABS_GRAPHQL_PATH } from '../../config/env';
import { PRODUCTION_BY_ID, PRODUCTION_DELETE, sendGraphqlRequest } from '../../graphql/apis';
import { useGetLoginUser } from '../../hooks/scripts/useSessionUser';
import Main from '../../Layout/Main';

export default function ProductionDetail({ preFetchData }) {

    const { data, error: preFetchError } = preFetchData;
    const [production, setProduction] = useState(data.production);
    const [error, setError] = useState(preFetchError);

    // states
    const [editable, setEditable] = useState(false);

    const router = useRouter();

    const loginUser = useGetLoginUser();
    // is owner
    const isSelfView = useMemo(() => {
        if (!loginUser) return false;
        if (!production.user) return false;
        return loginUser._id === production.user._id;
    }, [loginUser, production.user]);

    const onSetInvisibleClick = useCallback(() => {
        async function doSetInvisible({ }) {
            const res = await sendGraphqlRequest({
                query: PRODUCTION_DELETE,
                variables: {
                    pid: production._id
                }
            });
            const { data, error } = res;
            if (error) setError(error);
            else {
                setProduction(data.production);
            }
        }
    }, [production._id]);

    const onUpdateClick = () => setEditable(true);



    if (error) return null;

    return (
        <Main>
            <Typography variant='h1'>
                {production.name}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    {isSelfView ? 'Self View' : 'Public View'} |
                    {production.isActivate ? 'Public' : 'Invisible'}
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <br />
                    {/* opreation area */}
                    {
                        isSelfView ? (
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Button variant="contained" color='error' fullWidth onClick={onSetInvisibleClick}>Set Invisible</Button>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button variant="contained" fullWidth onClick={onUpdateClick}>Update</Button>
                                </Grid>
                            </Grid>
                        ) : null
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='p'>
                        name: {production.name}
                    </Typography>
                    <Typography variant='p'>
                        quantity: {production.quantity}
                    </Typography>
                    <Typography variant='p'>
                        description: {production.quantity}
                    </Typography>
                    <Typography variant='p'>
                        condition: {production.quantity}
                    </Typography>
                    <Typography variant='p'>
                        address: {production.address.content}
                    </Typography>
                </Grid>
                {
                    isSelfView ? null : (
                        <>
                            <div>map here</div>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Button variant="contained" onClick={() => { }}>Contact</Button>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button variant="contained" onClick={() => { }}>interested</Button>
                                </Grid>
                            </Grid>
                        </>
                    )
                }
            </Grid>
        </Main>
    )
}

export async function getServerSideProps(context) {

    console.log(context.params);

    const { id: pid } = context.params;

    const res = await sendGraphqlRequest({
        query: PRODUCTION_BY_ID,
        variables: {
            pid
        },
        isPreFetch: true
    });

    console.log(res);

    return {
        props: { preFetchData: res }, // will be passed to the page component as props
    }
}