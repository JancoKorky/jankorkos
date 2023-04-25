import { OutputData } from '@editorjs/editorjs';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const EditorBlock = dynamic(() => import('../components/Editor/EditorBlock'), {
  ssr: false,
});

const About: NextPage = () => {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState<OutputData>();
  // console.log(data);
  return <EditorBlock data={data} onChange={setData} />;
};

export default About;
