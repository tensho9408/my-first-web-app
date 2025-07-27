# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'MyLearning'
copyright = '2025, tensho'
author = 'tensho'
release = 'y'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

# import os
# import sys
# sys.path.insert(0, os.path.abspath('./exts'))
#
# extensions.append('mermaid_wrapper')

extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.viewcode",
    "sphinx.ext.todo",
    "myst_parser",
    "sphinxcontrib.mermaid",
]


source_suffix = {
    '.rst': 'restructuredtext',
    '.md': 'markdown',
}


html_last_updated_fmt = '\n%Y-%m-%d %H:%M'
todo_include_todos = True
html_show_sourcelink = False
suppress_warnings = ['misc.highlighting_failure']  # mermaid の警告抑制用
# master_doc = 'index'

templates_path = ['_templates']
exclude_patterns = []

language = 'ja'

# ソースファイルのエンコーディング
source_encoding = "utf-8"

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# html_theme = 'alabaster'
html_theme = "sphinx_rtd_theme"


html_static_path = ['_static']
# サイドバーに表示するロゴ画像を指定（ファイル名を適切に変更してください）
html_logo = '_static/logo.png'
# ブラウザのタブアイコンにする場合
html_css_files = [
    'css/style.css',
    'css/custom.css'
]

html_js_files = [
    "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js",  # Mermaid 本体
    "data/gantt-data.js",  # ← 分離したデータファイル
    "js/mermaid-wrapper.js"  # Mermaid を描画する処理
]


# exclude_patterns = ["chapters/schedule.md"]
