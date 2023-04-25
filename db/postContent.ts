import { PostContentType } from '@/definitions/postContentType';

export const postContent: PostContentType[] = [
  {
    id: 'macedonsko_1',
    postIdRef: 1,
    outputData: {
      blocks: [
        {
          type: 'header',
          data: {
            level: 3,
            text: 'KrasTny Header',
          },
        },
        {
          type: 'paragraph',
          data: 'KrasTny Paragraph',
        },
        {
          type: 'paragraph',
          data: 'Sed semper, tortor malesuada tristique dictum, magna erat sodales quam, a dapibus odio lorem in urna. Sed porta id eros in tincidunt. Cras tempor nibh ut eros congue imperdiet. Donec sodales, augue ac scelerisque laoreet, enim ante faucibus massa, id suscipit ante purus quis magna. Duis finibus, risus at mattis commodo, turpis ligula vulputate ante, ut mollis tellus ex ac orci. Praesent imperdiet nulla eu suscipit congue. Morbi sapien urna, tincidunt ut massa in, facilisis tincidunt augue. Mauris tempor mauris vitae hendrerit volutpat. Sed vel vestibulum felis, sed pretium mi. Proin ornare sapien risus, vitae rhoncus felis efficitur ac. Nunc vestibulum hendrerit sem, in condimentum sem ultrices nec. Duis feugiat placerat sem, sed cursus velit gravida posuere. Nullam vel sem non nibh pharetra pharetra ac vulputate risus. Donec at rhoncus ex, eget iaculis est.',
        },
        {
          type: 'paragraph',
          data: 'Donec tempor, massa at bibendum molestie, mauris erat pulvinar lacus, vitae varius augue felis quis diam. Nullam ornare mattis arcu ut volutpat. Aenean dignissim, turpis condimentum finibus mollis, ante neque iaculis nulla, a aliquet enim nibh ac massa. Sed eget aliquam orci. Donec placerat congue dolor, eleifend sodales libero ultricies ac. Duis mollis nunc ac consectetur sodales. Fusce id elit non lorem molestie faucibus id ut urna. Nunc imperdiet consequat leo, ut varius tortor fermentum et. In vel dictum felis. Quisque ultricies pulvinar vehicula.',
        },
        {
          type: 'paragraph',
          data: 'Curabitur ut ligula ac erat pellentesque interdum. In a laoreet sapien. Donec felis purus, vulputate eu massa quis, molestie vulputate urna. Nulla eu ligula et sapien lobortis elementum. Morbi in orci non felis imperdiet interdum ac vitae turpis. Cras pulvinar tellus finibus augue pulvinar dapibus. Donec dapibus, augue ac tristique ornare, sapien felis suscipit risus, quis ornare nisi ligula ut ligula. Donec eget facilisis ante. Aenean ornare scelerisque tempor. Suspendisse potenti. Suspendisse non condimentum lorem. Morbi tristique nunc vitae purus consequat, a vestibulum elit sodales. Sed ligula ligula, convallis eget malesuada id, fringilla quis quam. Nulla malesuada, arcu non blandit euismod, odio elit suscipit diam, non finibus nunc justo quis ipsum. Aenean ullamcorper aliquet ex, ornare dignissim purus pharetra vel. Praesent vitae nibh orci.',
        },
        {
          type: 'paragraph',
          data: 'Phasellus vel libero ultrices, sollicitudin massa interdum, maximus quam. Proin ac posuere augue. Proin mattis lacus ac iaculis suscipit. Aenean aliquam mollis orci vitae euismod. Aliquam sed finibus turpis. Mauris commodo pretium metus quis porta. Nam eu lacus sollicitudin, vehicula risus non, luctus ex. Pellentesque facilisis dui sit amet diam faucibus, eget sodales orci vestibulum. Integer in elit ligula.',
        },
        {
          type: 'paragraph',
          data: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas lobortis, tortor non venenatis congue, felis ante commodo odio, elementum pellentesque erat nunc non massa. Integer euismod nibh nulla, nec aliquam nisl sodales eu. Vestibulum mollis nunc nec blandit semper. Etiam nec diam diam. Maecenas accumsan leo ac sapien porta malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin in finibus odio, a tempor diam. Phasellus in maximus neque, sit amet posuere leo. Nullam neque tellus, tristique sit amet consectetur quis, consequat in est. Suspendisse ac ante odio.',
        },
        {
          type: 'image-block',
          data: [
            {
              type: 'thumb-image',
              data: {
                url: '/../public/sunrise-1014712__340.jpg',
              },
            },
          ],
        },
      ],
    },
  },
];
