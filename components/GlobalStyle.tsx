import { createGlobalStyle } from "./styledComponents";
import { connect } from "react-redux";
import { RootState } from "../store";

export const Style = createGlobalStyle<{ isDarkMode: boolean }>`
  body {
    font-family: ${props => props.theme.fontFamilySansSerif};
    color: ${props => props.theme.fontColor(props.isDarkMode)};
    background-color: ${props => props.theme.background(props.isDarkMode)};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .editor {
    height: 100%;

    .CodeMirror {
      height: 100%;
      font-size: 16px;
      line-height: 1.5;
    }
  }

  /* CODEMIRROR THEME */
  /* ONE DARK */

  .cm-s-one-dark-vivid {
    font-family: ${props => props.theme.fontFamilyMonospace};
    /* font-weight: 350; */
    color: ${props => props.theme.fontColor(props.isDarkMode)};
    background-color: ${props => props.theme.background(props.isDarkMode)};
    .CodeMirror-selected {
      background-color: #3e4451;
    }
    .CodeMirror-gutter,
    .CodeMirror-gutters {
      border: none;
      background-color: #282c34;
    }
    .CodeMirror-linenumber,
    .CodeMirror-linenumbers {
      color: #5c6370 !important;
      background-color: transparent;
    }
    .CodeMirror-lines {
      color: #abb2bf !important;
      background-color: transparent;
    }
    .CodeMirror-cursor {
      border-left: 2px solid #56b6c2 !important;
    }
    /* addon: edit/machingbrackets.js & addon: edit/matchtags.js */
    .CodeMirror-matchingbracket,
    .CodeMirror-matchingtag {
      border-bottom: 2px solid #56b6c2;
      color: #abb2bf !important;
      background-color: transparent;
    }
    .CodeMirror-nonmatchingbracket {
      border-bottom: 2px solid #e06c75;
      color: #abb2bf !important;
      background-color: transparent;
    }
    /* addon: fold/foldgutter.js */
    .CodeMirror-foldmarker,
    .CodeMirror-foldgutter,
    .CodeMirror-foldgutter-open,
    .CodeMirror-foldgutter-folded {
      border: none;
      text-shadow: none;
      color: #5c6370 !important;
      background-color: transparent;
    }
    /* addon: selection/active-line.js */
    .CodeMirror-activeline-background {
      background-color: rgba(153, 187, 255, 0.04);
    }
    /* basic syntax */
    .cm-header {
      color: #e06c75;
    }
    .cm-quote {
      color: #5c6370;
      font-style: italic;
    }
    .cm-negative {
      color: #e06c75;
    }
    .cm-positive {
      color: #e06c75;
    }
    .cm-strong {
      color: #d19a66;
      font-weight: bold;
    }
    .cm-header .cm-strong {
      color: #d19a66;
      font-weight: bold;
    }
    .cm-em {
      color: #c678dd;
      font-style: italic;
    }
    .cm-header .cm-em {
      color: #c678dd;
      font-style: italic;
    }
    .cm-tag {
      color: #e06c75;
    }
    .cm-attribute {
      color: #d19a66;
    }
    .cm-link {
      color: #98c379;
      border-bottom: solid 1px #98c379;
    }
    .cm-builtin {
      color: #e06c75;
    }
    .cm-keyword {
      color: #c678dd;
    }
    .cm-def {
      color: #e5c07b;
    } /* original:  #d19a66; */
    .cm-atom {
      color: #d19a66;
    }
    .cm-number {
      color: #d19a66;
    }
    .cm-property {
      color: #56b6c2;
    } /* original: #abb2bf */
    .cm-qualifier {
      color: #d19a66;
    }
    .cm-variable {
      color: #e06c75;
    }
    .cm-string {
      color: #98c379;
    }
    .cm-punctuation {
      color: #abb2bf;
    }
    .cm-operator {
      color: #56b6c2;
    } /* original: #abb2bf */
    .cm-meta {
      color: #abb2bf;
    }
    .cm-bracket {
      color: #abb2bf;
    }
    .cm-comment {
      color: #5c6370;
      font-style: italic;
    }
    .cm-error {
      color: #e06c75;
    }
    /* css syntax corrections */
    .cm-m-css.cm-variable {
      color: #828997;
    }
    .cm-m-css.cm-property {
      color: #abb2bf;
    }
    .cm-m-css.cm-atom {
      color: #56b6c2;
    }
    .cm-m-css.cm-builtin {
      color: #56b6c2;
    }
    /* lua syntax corrections */
    .cm-m-lua.cm-variable {
      color: #56b6c2;
    }
  }
`;

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const GlobalStyle = connect(mapStateToProps)(Style);
