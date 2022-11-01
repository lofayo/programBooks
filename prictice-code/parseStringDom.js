/*
 * @Author: Luofanyong
 * @Date: 2022-08-10 15:11:41
 * @Description: 测试如何解析字符串中的DOM节点，且显示出来
 */
function parseStringDom() {
    const strDom = '解析字符串中的DOM节点<span style="color: red;">12</span>解析字符串中的DOM节点';
    // const parser = new DOMParser();
    // // 生成的是个document
    // const dom = parser.parseFromString(strDom, 'text/html');  
    // document.body.prepend(dom.body);
    document.body.innerHTML = strDom;
}