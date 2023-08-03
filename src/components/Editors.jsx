import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './inicialContent'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.css'
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble
} from 'react-icons/rx'


lowlight.registerLanguage('js', js)


export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      })
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      }
      
    }
}) 

  return (
    <>
      <EditorContent 
        className="max-w-[700px] mx-auto pt-16 prose prose-sky"
        editor={editor} 
      />
      { editor? <BubbleMenu className='bg-white shadow-xl shadow-black/30 border border-zinc-200 rounded-lg overflow-hidden flex divide-x divide-zinc-200 ' editor={editor}>
        
        <button className='p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-100 flex items-center'>
            Text
            <RxChevronDown className='w-4 h-4'/>
        </button>
        <button className='p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-100 flex items-center'>
            <RxChatBubble className='w-4 -4'/>
            Coment
        </button>
        <div className='flex '>
          <button className='p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-200 flex items-center data-[active=true]:text-sky-400' 
            onClick={() => editor.chain().focus().toggleBold().run()}
            data-active={editor.isActive('bold')} 
          >
            <RxFontBold className='w-4 h-4'/>
          </button>
          <button className='p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-200 items-center data-[active=true]:text-sky-400'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          data-active={editor.isActive('italic')} 
          >
            <RxFontItalic className='w-4 h-4'/>
          </button >
          <button className='p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-200 items-center data-[active=true]:text-sky-400' 
            onClick={() => editor.chain().focus().toggleStrike().run()}
            data-active={editor.isActive('strike')}
          >
            <RxStrikethrough className='w-4 h-4'/>
          </button>
          <button className='p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leadind-none hover:text-zinc-600 hover:bg-zinc-200 items-center data-[active=true]:text-sky-400' 
            onClick={() => editor.chain().focus().toggleCode().run()}
            data-active={editor.isActive('code')}>
            <RxCode className='w-4 h-4'/>
          </button>
        </div>
      </ BubbleMenu> : ''}
    </>

  )
}