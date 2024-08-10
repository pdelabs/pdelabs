'use client';

import { FC, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/email';
import { Body, Caption, SmallBody, Strong, } from '@/components/Typography/Typography';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import styles from './Contact.module.css';
import Button from '@/components/Button/Button';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle2Icon, XCircle } from 'lucide-react';

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const ContactForm: FC = () => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormData>();
    console.log(errors);
    const { state, actions } = useAsyncValueState<Response>();
    const { toast } = useToast();

    const onSubmit = useCallback(async (data: FormData) => {
        actions.loading();
        try {
            const response = await sendEmail(data);
            actions.data(response);
            reset();
        } catch (e: any) {
            actions.error('There was an error sending email');
        }
    }, []);

    useOnAsyncStateData(state, () => {
        toast({
            title: <Body className="inline-flex gap-2 justify-start items-center w-fit"><CheckCircle2Icon color="green" /> Email sent!</Body> as any,
            description: "We will get back to you in less than 24hs",
        })
    });

    useOnAsyncStateError(state, () => {
        toast({

            title: <Body className="inline-flex gap-2 justify-start items-center w-fit"><XCircle color="red" /> There was an error sending email</Body> as any,
        })
    });

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name'>
                <SmallBody>Full Name</SmallBody>
            </label>
            <Input className={styles.input} placeholder="Your name" {...register('name', { required: true })} />
            <div className={styles.gap} />
            <label htmlFor='email'>
                <SmallBody >Your company email</SmallBody>
            </label>

            <Input className={styles.input} error={errors.email?.message} placeholder="user@companyemail.com" {...register('email', { required: true, validate: validateEmail })} />
            <div className={styles.gap} />
            <label htmlFor='message'>
                <SmallBody >Tell us about your project</SmallBody>
            </label>
            <Textarea className={styles.input} rows={8} placeholder="What do you want to accomplish?" {...register('message', { required: true })} />
            <div className={styles.gap} />
            <Caption>We will get back to you in less than <Strong>24 hs.</Strong></Caption>
            <div className={styles.gap} />
            <Button disabled={state.loading}><Body><Strong>{state.loading ? "Loading" : "Send"}</Strong></Body></Button>
        </form>
    );
};

export default ContactForm;

interface AsyncValue<D> {
    loading: boolean;
    error: string | null;
    data: D | null;
}


function validateEmail(email: string): string | undefined {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null ? undefined : 'Invalid email';
};


interface AsyncValueStateReducerActionLoading<D> {
    type: 'loading';
}

interface AsyncValueStateReducerActionError<D> {
    type: 'error';
    error: string;
}

interface AsyncValueStateReducerActionData<D> {
    type: 'data';
    data: D | null;
}

type AsyncValueStateReducerAction<D> = AsyncValueStateReducerActionLoading<D> | AsyncValueStateReducerActionError<D> | AsyncValueStateReducerActionData<D>;


class AsyncValueAction<D> {

    private dispatch: (action: AsyncValueStateReducerAction<D>) => void;

    constructor(dispatch: (action: AsyncValueStateReducerAction<D>) => void) {
        this.loading = this.loading.bind(this);
        this.error = this.error.bind(this);
        this.data = this.data.bind(this);
        this.dispatch = dispatch;
    }

    loading() {
        return this.dispatch({ type: 'loading' });
    }

    error(error: string) {
        return this.dispatch({ type: 'error', error });
    }

    data(data: D) {
        return this.dispatch({ type: 'data', data });
    }
}

function asyncValueStateReducer<D>(state: AsyncValue<D>, action: AsyncValueStateReducerAction<D>): AsyncValue<D> {
    switch (action.type) {
        case 'loading':
            return { ...state, loading: true, error: null };
        case 'error':
            return { ...state, loading: false, error: action.error };
        case 'data':
            return { ...state, loading: false, data: action.data };
        default:
            return state;
    }
}

function useAsyncValueState<D>(initialValue?: Partial<AsyncValue<D>>) {
    const [state, dispatch] = useReducer(asyncValueStateReducer, {
        loading: false,
        error: null,
        data: null,
        ...initialValue,
    });

    const actions = useMemo(() => {
        return new AsyncValueAction<D>(dispatch);
    }, [dispatch])
    return { state, actions };
}


function usePrevious<D>(value: D) {
    const ref = React.useRef<D | null>(null);
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}


function useOnAsyncStateData<D>(state: AsyncValue<D>, onStateData: (data: D) => void) {
    const prevData = usePrevious(state.data);
    useEffect(() => {
        if (!state.loading && state.data && state.data !== prevData) {
            onStateData(state.data);
        }
    }, [state.data]);
}

function useOnAsyncStateError(state: AsyncValue<any>, onStateError: (error: string) => void) {
    const prevError = usePrevious(state.error);
    useEffect(() => {
        if (!state.loading && state.error && state.error !== prevError) {
            onStateError(state.error);
        }
    }, [state.error]);
}