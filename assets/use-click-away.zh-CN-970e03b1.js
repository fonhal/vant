import{o as a,a as n,z as t}from"./vue-libs-b2a2f6f9.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>useClickAway</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>监听点击元素外部的事件。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useClickAway } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();
    <span class="hljs-title function_">useClickAway</span>(root, <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;click outside!&#39;</span>);
    });

    <span class="hljs-keyword">return</span> { root };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-shi-jian" tabindex="-1">自定义事件</h3><p>通过 <code>eventName</code> 选项可以自定义需要监听的事件类型。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useClickAway } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();
    <span class="hljs-title function_">useClickAway</span>(
      root,
      <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;touch outside!&#39;</span>);
      },
      { <span class="hljs-attr">eventName</span>: <span class="hljs-string">&#39;touchstart&#39;</span> }
    );

    <span class="hljs-keyword">return</span> { root };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Options</span> = {
  eventName?: <span class="hljs-built_in">string</span>;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useClickAway</span>(<span class="hljs-params">
  target: Element | Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;,
  listener: EventListener,
  options?: Options
</span>): <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>绑定事件的元素，支持传入数组来绑定多个元素</td><td><em>Element | Ref&lt;Element&gt; | Array&lt;Element | Ref&lt;Element&gt;&gt;</em></td><td>-</td></tr><tr><td>listener</td><td>点击外部时触发的回调函数</td><td><em>EventListener</em></td><td>-</td></tr><tr><td>options</td><td>可选的配置项</td><td><em>Options</em></td><td>见下表</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>eventName</td><td>监听的事件类型</td><td><em>string</em></td><td><code>click</code></td></tr></tbody></table></div>`,9),p=[e],h={__name:"use-click-away.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(o,i)=>(a(),n("div",l,p))}};export{h as default};
