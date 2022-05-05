import { FormEvent, useState } from 'react';
import { ArrowLeft } from 'phosphor-react';

import { FeedbackType, feedbackTypes } from '../index';
import { ScreenshotButton } from '../ScreenshotButton';
import { CloseWidgetButton } from '../../CloseWidgetButton';

interface IFeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep(props: IFeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[props.feedbackType];

  const [screenshot, setScreenshot] = useState<string | null>(null);

  const [comment, setComment] = useState('');

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    props.onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type={'button'}
          className={'top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'}
          onClick={props.onFeedbackRestartRequested}
        >
          <ArrowLeft weight={'bold'} className={'w-4 h-4'} />
        </button>
        <span className={'text-xl leading-6 flex items-center gap-2'}>
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className={'w-6 h-6'}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseWidgetButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className={'my-4 w-full'}>
        <textarea
          className={
            'min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          }
          onChange={(event) => setComment(event.target.value)}
          placeholder={'Conte com detalhes o que está acontecendo...'}
        />
        <footer className={'flex gap-2 mt-2'}>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type={'submit'}
            disabled={comment.length === 0}
            className={
              'p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
            }
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
