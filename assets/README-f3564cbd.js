import{o as a,a as t,z as n}from"./vue-libs-b2a2f6f9.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Tab</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to switch between different content areas.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tab</span>, <span class="hljs-title class_">Tabs</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tab</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabs</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>The first tab is active by default, you can set <code>v-model:active</code> to active specified tab.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab&#39; + index&quot;</span>&gt;</span>
    content of tab {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">return</span> { active };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="match-by-name" tabindex="-1">Match By Name</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tab 1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>content of tab 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tab 2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>content of tab 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tab 3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>content of tab 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeName = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;a&#39;</span>);
    <span class="hljs-keyword">return</span> { activeName };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="swipe-tabs" tabindex="-1">Swipe Tabs</h3><p>By default more than 5 tabs, you can scroll through the tabs. You can set <code>swipe-threshold</code> attribute to customize threshold number.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 8&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab&#39; + index&quot;</span>&gt;</span>
    content of tab {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="disabled-tab" tabindex="-1">Disabled Tab</h3><p>Use <code>disabled</code> prop to disable a tab.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 3&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab&#39; + index&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;index === 2&quot;</span>&gt;</span>
    content of tab {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="card-style" tabindex="-1">Card Style</h3><p>Tabs styled as cards.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;card&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 3&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab&#39; + index&quot;</span>&gt;</span>
    content of tab {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="click-tab-event" tabindex="-1">Click Tab Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> @<span class="hljs-attr">click-tab</span>=<span class="hljs-string">&quot;onClickTab&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 2&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab&#39; + index&quot;</span>&gt;</span>
    content of tab {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickTab</span> = (<span class="hljs-params">{ title }</span>) =&gt; <span class="hljs-title function_">showToast</span>(title);
    <span class="hljs-keyword">return</span> {
      onClickTab,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="sticky" tabindex="-1">Sticky</h3><p>In sticky mode, the tab nav will be fixed to top when scroll to top.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">sticky</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab &#39; + index&quot;</span>&gt;</span>
    content {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shrink" tabindex="-1">Shrink</h3><p>In shrink mode, the tabs will be shrinked to the left.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">shrink</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab &#39; + index&quot;</span>&gt;</span>
    content {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-title" tabindex="-1">Custom title</h3><p>Use title slot to custom tab title.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;more-o&quot;</span> /&gt;</span>tab <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    content {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="switch-animation" tabindex="-1">Switch Animation</h3><p>Use <code>animated</code> props to change tabs with animation.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">animated</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab &#39; + index&quot;</span>&gt;</span>
    content {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="swipeable" tabindex="-1">Swipeable</h3><p>In swipeable mode, you can switch tabs with swipe gesture in the content.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">swipeable</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab &#39; + index&quot;</span>&gt;</span>
    content {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="scrollspy" tabindex="-1">Scrollspy</h3><p>In scrollspy mode, the list of content will be tiled.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">scrollspy</span> <span class="hljs-attr">sticky</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 8&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab &#39; + index&quot;</span>&gt;</span>
    content {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="before-change" tabindex="-1">Before Change</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">:before-change</span>=<span class="hljs-string">&quot;beforeChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;tab &#39; + index&quot;</span>&gt;</span>
    content {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeChange</span> = (<span class="hljs-params">index</span>) =&gt; {
      <span class="hljs-comment">// prevent change</span>
      <span class="hljs-keyword">if</span> (index === <span class="hljs-number">1</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      }

      <span class="hljs-comment">// async</span>
      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        <span class="hljs-title function_">resolve</span>(index !== <span class="hljs-number">3</span>);
      });
    };

    <span class="hljs-keyword">return</span> {
      active,
      beforeChange,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="tabs-props" tabindex="-1">Tabs Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:active</td><td>Index of active tab</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>type</td><td>Can be set to <code>line</code> <code>card</code></td><td><em>string</em></td><td><code>line</code></td></tr><tr><td>color</td><td>Tab color</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>background</td><td>Background color</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>duration</td><td>Toggle tab&#39;s animation time</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>line-width</td><td>Width of tab line</td><td><em>number | string</em></td><td><code>40px</code></td></tr><tr><td>line-height</td><td>Height of tab line</td><td><em>number | string</em></td><td><code>3px</code></td></tr><tr><td>animated</td><td>Whether to change tabs with animation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>Whether to show border when <code>type=&quot;line&quot;</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>ellipsis</td><td>Whether to ellipsis too long title</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>sticky</td><td>Whether to use sticky mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>shrink <code>v3.2.8</code></td><td>Whether to shrink the the tabs to the left</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>swipeable</td><td>Whether to enable gestures to slide left and right</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-render</td><td>Whether to enable tab content lazy render</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>scrollspy</td><td>Whether to use scrollspy mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>offset-top</td><td>Sticky offset top , supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>swipe-threshold</td><td>Set swipe tabs threshold</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td>title-active-color</td><td>Title active color</td><td><em>string</em></td><td>-</td></tr><tr><td>title-inactive-color</td><td>Title inactive color</td><td><em>string</em></td><td>-</td></tr><tr><td>before-change</td><td>Callback function before changing tabs, return <code>false</code> to prevent change, support return Promise</td><td><em>(name: number | string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tab-props" tabindex="-1">Tab Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td>disabled</td><td>Whether to disable tab</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>dot</td><td>Whether to show red dot on the title</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>Content of the badge on the title</td><td><em>number | string</em></td><td>-</td></tr><tr><td>name</td><td>Identifier</td><td><em>number | string</em></td><td>Index of tab</td></tr><tr><td>url</td><td>Link</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>Target route of the link, same as to of vue-router</td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>If true, the navigation will not leave a history record</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>title-style</td><td>Custom title style</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>title-class</td><td>Custom title class name</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>show-zero-badge <code>v3.2.2</code></td><td>Whether to show badge when the value is zero</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabs-events" tabindex="-1">Tabs Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click-tab <code>v3.1.4</code></td><td>Emitted when a tab is clicked</td><td><em>{ name: string | number, title: string, event: MouseEvent, disabled: boolean }</em></td></tr><tr><td>change</td><td>Emitted when active tab changed</td><td><em>name: string | number, title: string</em></td></tr><tr><td>rendered</td><td>Emitted when content first rendered in lazy-render mode</td><td><em>name: string | number, title: string</em></td></tr><tr><td>scroll</td><td>Emitted when tab scrolling in sticky mode</td><td><em>{ scrollTop: number, isFixed: boolean }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabs-methods" tabindex="-1">Tabs Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get Tabs instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>resize</td><td>Resize Tabs when container element resized or visibility changed</td><td>-</td><td>-</td></tr><tr><td>scrollTo</td><td>Go to specified tab in scrollspy mode</td><td><em>name: string | number</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabProps</span>, <span class="hljs-title class_">TabsType</span>, <span class="hljs-title class_">TabsProps</span>, <span class="hljs-title class_">TabsInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>TabsInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabsInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> tabsRef = ref&lt;<span class="hljs-title class_">TabsInstance</span>&gt;();

tabsRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">scrollTo</span>(<span class="hljs-number">0</span>);
</code></pre></div><div class="van-doc-card"><h3 id="tabs-slots" tabindex="-1">Tabs Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>nav-left</td><td>Custom nav left content</td></tr><tr><td>nav-right</td><td>Custom nav right content</td></tr><tr><td>nav-bottom <code>v3.1.1</code></td><td>Custom nav bottom content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tab-slots" tabindex="-1">Tab Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Content of tab</td></tr><tr><td>title</td><td>Custom tab title</td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-tab-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-tab-active-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-tab-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-tab-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-tab-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-tabs-default-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-tabs-line-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-tabs-card-height</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-tabs-nav-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-tabs-bottom-bar-width</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-tabs-bottom-bar-height</td><td><em>3px</em></td><td>-</td></tr><tr><td>--van-tabs-bottom-bar-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr></tbody></table></div>`,27),d=[l],i={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),t("div",e,d))}};export{i as default};
