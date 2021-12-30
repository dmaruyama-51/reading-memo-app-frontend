import {remark} from 'remark';
import html from 'remark-html';

const markdownToHtml = async (markdown) => {
    const res = await remark().use(html).process(markdown);
    return res.toString();
}

export default markdownToHtml;