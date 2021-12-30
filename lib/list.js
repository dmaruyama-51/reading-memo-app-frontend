import fetch from 'node-fetch'

const SERVERURL = 'http://127.0.0.1:8000/';

// Reading Memo 一覧
export async function getAllListData() {
    const res = await fetch(new URL(`${SERVERURL}api/list/`));
    const lists = await res.json();
    return lists
}

// Reading Memo Id
export async function getAllListIds() {
    const res = await fetch(new URL(`${SERVERURL}api/list/`));
    const lists = await res.json();

    return lists.map((list) => {
        return {
            params: {
                id: String(list.id)
            }
        }
    })
}

// Reading Memo Detail
export async function getListData(id) {
    const res = await fetch(new URL(`${SERVERURL}api/list/${id}/`));
    const list = await res.json();

    return list;
}