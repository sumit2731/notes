import {initTRPC} from '@trpc/server';

type User = {
    user: {
        id: string
    }
}

const t = initTRPC.create();
const t2 = initTRPC
    .context<User>()
    .create()
