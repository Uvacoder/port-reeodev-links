/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      link: {type: 'doc', id: 'intro'},
      items: [],
    },
    {
      type: 'category',
      label: 'General Resources',
      items: [
        "general/ui",
        "general/color",
        "general/FreeIll",
        "general/tools",
       ],
    },
    {
      type: 'category',
      label: 'Javascript',
      items: [
        "javascript/javascript_utili",
        "javascript/javascript_tools",
       ],
    },
    {
      type: 'category',
      label: 'HTML',
      items: [
        "html/animations",
        "html/htmlUtility",
       ],
    },
    {
      type: 'category',
      label: 'CSS',
      items: [
        "css/fonts",
        "css/shadow",
        "css/generative",
       ],
    },
    {
      type: 'category',
      label: 'React',
      items: [
        {
          type: 'category',
          label: 'Recommendations',
          items: [
            "react/recommendations/recommendations",
          ],
        },
        {
          type: 'category',
          label: 'General Use',
          items: [
            "react/common/Generalframework",
            "react/common/reading",
          ],
        },
        {
          type: 'category',
          label: 'React web',
          items: [
            "react/rawReact/reactCss",
            "react/rawReact/utility",
          ],
        },
        {
          type: 'category',
          label: 'React Native',
          items: [
            "react/native/reactNativeCss",
            "react/native/utility",
          ],
        },
      ],
    },
  ],
  
  
};

module.exports = sidebars;
