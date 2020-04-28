const generatePosts = (count) => {
  const data = [];
  for (let i = 0; i < count; i += 1) {
    const obj = {
      title: `Este es el post numero ${i + 1}`,
      description: 'lorem ipsumLorem ipsum dolor sit amet consectetur, adipisicing elit.',
      cover: 'https://firebasestorage.googleapis.com/v0/b/frcgustavo-849f3.appspot.com/o/blog.png?alt=media&token=215341a0-f01d-4bfb-aa7a-f105b1485651',
      slug: `este-es-el-slug-del-post-numero-${i + 1}`,
      post: `<h1 id="esteesmiprimerpost">Este es mi primer post</h1>
            <h2 id="esteesunsubtitulo">Este es un subtitulo</h2>
            <p>Esto esta echo conr markdown</p>
            <pre><code class="js language-js">const n = 1
            </code></pre>`,
      createdAt: '2020-04-14T21:03:27.505Z',
      updatedAt: '2020-04-14T21:03:27.505Z',
    };
    data.push(obj);
  }

  if (count === 1) {
    return data[0];
  }
  return data;
};

generatePosts(1);

const initialState = {
  blog: '', // generatePosts(9),
  post: '', // generatePosts(1),
};

export default initialState;
