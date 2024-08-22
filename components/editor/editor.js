// @ts-ignore
import EditorJS from "@editorjs/editorjs";
import Code from '@editorjs/code'
import Paragraph from '@editorjs/paragraph'
import Header from '@editorjs/header'
import CheckList from '@editorjs/checklist'
import InlineCode from "@editorjs/inline-code";
import Table from "@editorjs/table";
import Delimiter from "@editorjs/delimiter";
import Raw from "@editorjs/raw";
import NestedList from '@editorjs/nested-list';
import { useEffect, useRef } from 'react';

const EDITOR_TOOLS = {
    code: Code,
    header: {
        class: Header,
        shortcut: "CMD+H",
        inlineToolbar: true,
        config: {
            placeholder: "Enter a Header",
            levels: [2, 3, 4],
            defaultLevel: 3,
        },
    },
    paragraph: {
        class: Paragraph,
        shortcut: 'CMD+P',
        inlineToolbar: true,
    },
    list: {
        class: NestedList,
        inlineToolbar: true,
        config: {
            defaultStyle: 'unordered'
        },
        shortcut: 'CMD+L'
    },
    checklist: CheckList,
    inlineCode: InlineCode,
    table: Table,
    delimiter: Delimiter,
    raw: Raw,
}

const Editor = ({ data, onChange, holder, readOnly = false, styles= {} }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                placeholder: "Start writting here..",
                tools: EDITOR_TOOLS,
                data,
                readOnly: readOnly,
                async onChange(api, event) {
                    const content = await api.saver.save();
                    // console.log(content, "sdfb");
                    onChange(content);
                },
                minHeight: 0,
                autofocus: !readOnly,
            })
            ref.current = editor;
        }
        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, [])

    const defaultStyles = {
        width: "103%",
        minHeight: "auto",
        padding: '0px'
    };

    const addedStyles = { ...defaultStyles, ...styles };

    return (
        <div
            id={holder}
            style={addedStyles} 
        />
    )
}

export default Editor
