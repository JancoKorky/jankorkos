import { EDITOR_TOOLS } from './EditorTools';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import React, { memo, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

//props
type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
};

const EditorBlock = ({ data, onChange }: Props) => {
  // TODO: maybe create own editor as editorjs will struggle with typescript
  //add a reference to editor
  // const ref = useRef<EditorJS>();
  //
  // //initialize editorjs
  // useEffect(() => {
  //   if (!ref.current) {
  //     const editor = new EditorJS({
  //       holder: 'holder',
  //       tools: EDITOR_TOOLS,
  //       data,
  //       async onChange(api) {
  //         const data = await api.saver.save();
  //         onChange(data);
  //         console.log(data);
  //       },
  //     });
  //     ref.current = editor;
  //   }
  //
  //   //add a return function handle cleanup
  //   return () => {
  //     if (ref.current && ref.current.destroy) {
  //       ref.current.destroy();
  //     }
  //   };
  // }, [data, onChange]);

  return (
    <Row>
      <Col>
        <div id="holder" className={'w-100'} />
      </Col>
    </Row>
  );
};

export default memo(EditorBlock);
