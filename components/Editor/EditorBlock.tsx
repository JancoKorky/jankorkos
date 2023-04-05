import { EDITOR_TOOLS } from './EditorTools';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import React, { memo, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

//props
type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
};

const EditorBlock = ({ data, onChange, holder }: Props) => {
  //add a reference to editor
  const ref = useRef<EditorJS>();

  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
          console.log(data);
        },
      });
      ref.current = editor;
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <Row>
      <Col>
        <div id={holder} className={'w-100'} />
      </Col>
    </Row>
  );
};

export default memo(EditorBlock);
