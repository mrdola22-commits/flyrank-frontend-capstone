# FE-02 AI Prompting Drill – Workflow Report

## Overview

For this assignment, I selected the Contact Form feature from my portfolio website because it is a practical component that demonstrates user interaction, form validation, accessibility, and frontend development best practices. The objective was to compare the quality of AI-generated code produced by a vague prompt versus a detailed prompt and evaluate how prompt quality affects the final implementation.

## Round 1 – Vague Prompt

In the first round, I used a simple prompt requesting a contact form for my portfolio website. The AI generated a functional React contact form with basic validation, form submission, and a clean user interface. Although the generated code worked, it relied on custom validation logic and required additional review to ensure maintainability and consistency. The implementation solved the basic requirements but lacked a structured validation approach and was less scalable for future improvements.

## Round 2 – Detailed Prompt

For the second round, I created a much more specific prompt describing the project stack, validation requirements, accessibility expectations, and user experience goals. I requested stronger validation, better error handling, improved accessibility, and production-quality code. Based on this prompt, I enhanced the project by replacing the custom validation logic with Zod schema validation. This made the validation rules easier to maintain, reduced repetitive code, and improved the overall reliability of the form. I also improved user feedback by refining validation messages and strengthening the submission workflow.

## Comparison

Comparing both implementations clearly demonstrated the impact of prompt quality. The vague prompt produced a working solution quickly but required more manual improvements. The detailed prompt resulted in cleaner validation logic, improved maintainability, clearer error messages, and a more professional implementation. Using schema-based validation with Zod made the code easier to understand and extend while improving consistency across all form fields.

## Challenges and Lessons Learned

During development, I accidentally modified the wrong project file, which caused multiple TypeScript errors. By reviewing the project structure, restoring the correct utility file, and testing the application after each change, I resolved the issue successfully. This reinforced the importance of understanding the project architecture before applying AI-generated code.

This exercise showed that AI performs significantly better when provided with detailed context and explicit requirements. It also demonstrated that AI-generated code should always be reviewed, tested, and refined by the developer before being committed. Careful prompting combined with manual verification produces higher-quality, more maintainable software than relying on vague prompts alone.