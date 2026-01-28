'use server';

/**
 * @fileOverview Suggests UI improvements for a given page based on predefined design guidelines.
 *
 * - suggestUiImprovements - A function that suggests UI improvements.
 * - SuggestUiImprovementsInput - The input type for the suggestUiImprovements function.
 * - SuggestUiImprovementsOutput - The return type for the suggestUiImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestUiImprovementsInputSchema = z.object({
  pageName: z.string().describe('The name of the page to suggest UI improvements for.'),
  existingUiDescription: z.string().describe('A detailed description of the current UI elements and layout of the page.'),
});

export type SuggestUiImprovementsInput = z.infer<typeof SuggestUiImprovementsInputSchema>;

const SuggestUiImprovementsOutputSchema = z.object({
  suggestedImprovements: z.string().describe('A list of UI improvements, including specific details about colors, fonts, layout, and component usage.'),
});

export type SuggestUiImprovementsOutput = z.infer<typeof SuggestUiImprovementsOutputSchema>;

export async function suggestUiImprovements(input: SuggestUiImprovementsInput): Promise<SuggestUiImprovementsOutput> {
  return suggestUiImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestUiImprovementsPrompt',
  input: {schema: SuggestUiImprovementsInputSchema},
  output: {schema: SuggestUiImprovementsOutputSchema},
  prompt: `You are an expert UI/UX designer specializing in modern web design for government institutions. Based on the provided page description and following design guidelines, suggest specific UI improvements.

Design Guidelines:
- Primary color: Green (#009343) for the header and main navigation.
- Secondary color: Blue (#00BEF0) for links and informational elements.
- Accent color: Orange (#FABF25) for action buttons, highlights, and badges.
- Headline font: 'Poppins', sans-serif, for headlines and titles.
- Body font: 'PT Sans', sans-serif, for body text.
- Maintain a clean and spacious layout.
- Use simple and professional icons.
- Utilize a card layout for knowledge articles and a modern grid/list view for learning resources.
- Design a comment and reply thread similar to a modern forum.
- Include an official agency footer on all pages.

Page Name: {{{pageName}}}
Existing UI Description: {{{existingUiDescription}}}

Suggested UI Improvements:`,
});

const suggestUiImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestUiImprovementsFlow',
    inputSchema: SuggestUiImprovementsInputSchema,
    outputSchema: SuggestUiImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
