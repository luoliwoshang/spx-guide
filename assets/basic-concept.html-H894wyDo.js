import{_ as a,o as p,c as e,d as t}from"./app-y71lUuCu.js";const o="/spx-guide/assets/coordinate-system-fqV_vnXp.webp",r="/spx-guide/assets/sprite-qeSv_S2C.png",s="/spx-guide/assets/costume-coordinate-rkdNtmd9.png",n="/spx-guide/assets/sprite-x0-y0-bD1OoRhB.png",i="/spx-guide/assets/sprite-x50-y50-KwpU1QQK.png",c="/spx-guide/assets/heading-GMMbAjTr.png",l="/spx-guide/assets/heading-0-uwFGxCoR.png",u="/spx-guide/assets/costume-x0-y0-MA2RbSlr.png",d="/spx-guide/assets/costume-x55-y50-o0HZrINy.png",k={},m=t('<h2 id="坐标" tabindex="-1"><a class="header-anchor" href="#坐标" aria-hidden="true">#</a> 坐标</h2><p>Spx中舞台(stage)的坐标系为直角坐标系 （Rectangular Coordinates），其舞台原点(stage origin)为（0，0）为直角坐标系的原点（origin）</p><p><img src="'+o+'" alt="坐标系"></p><h2 id="精灵-sprite" tabindex="-1"><a class="header-anchor" href="#精灵-sprite" aria-hidden="true">#</a> 精灵(sprite)</h2><p>可以理解为一个在舞台中演出的角色，每个精灵都可以编写其配置信息决定其表现，以及通过编写<code>spx</code> 代码控制其行为逻辑</p><p>下图即为一个精灵(sprite)在舞台(stage)上展示的效果，其配置信息决定了精灵的显示效果</p><p><img src="'+r+`" alt="精灵"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;costumes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;calf-0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
      <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;costumeIndex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;heading&quot;</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
  <span class="token property">&quot;isDraggable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rotationStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在接下来的内容中，将会对以上配置信息一一进行介绍</p><h3 id="精灵坐标系-sprite-coordinate" tabindex="-1"><a class="header-anchor" href="#精灵坐标系-sprite-coordinate" aria-hidden="true">#</a> 精灵坐标系（sprite-coordinate)</h3><p>以精灵左上角作为坐标原点，水平线设为x轴，垂直线设为y轴，定义向右向下为x、y轴的正方向，反之为负，在造型(costume)中的配置也为参考该精灵坐标系，即使精灵的位置坐标(sprite position)更改，其内部坐标系也不会更改</p><p><img src="`+s+`" alt="坐标系"></p><h3 id="定位原点-位置坐标-sprite-position" tabindex="-1"><a class="header-anchor" href="#定位原点-位置坐标-sprite-position" aria-hidden="true">#</a> 定位原点/位置坐标 (sprite position)</h3><ul><li>精灵的定位原点（sprite origin）在它的左上角</li><li>一个精灵将围绕着它的原点进行旋转</li><li>配置信息中的<code>x</code>与<code>y</code> 配置了该精灵的中心点离定位原点(origin)的向x轴和y轴的偏移距离</li></ul><p>我将展示几个例子方便理解配置，在以下例子中，我们不设置造型(costume)的造型中心点，均默认为0（后续内容会介绍），且配置heading为90</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;costumes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;calf-0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;costumeIndex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;heading&quot;</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
  <span class="token property">&quot;isDraggable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rotationStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+n+'" alt="sprite"></p><p>该例子中，小牛的配置信息为<code>x:0</code> <code>y:0</code>，且因为精灵的定位原点<code>(sprite origin）</code>在精灵的左上角,所以小牛出现在了坐标轴的第四象限的位置。</p><p>而我们继续配置其<code>x</code>为<code>50</code> <code>y</code>为<code>50</code>，则小牛会沿着x轴和y轴各位移50个单位，其值为负，则会沿着x轴和y轴的反方向移动,这里不过多演示</p><p><img src="'+i+'" alt="sprite"></p><h3 id="朝向-heading" tabindex="-1"><a class="header-anchor" href="#朝向-heading" aria-hidden="true">#</a> 朝向(heading)</h3><p>heading参数决定了精灵的朝向，其值为角度，默认角度为0，允许输入范围为<code>0 ～ +- 180</code></p><p>在该角度系统中，我们以一个平面直角坐标系来理解，水平的为X轴，向右为正向左为负，垂直的为Y轴向上为正，向下为负。而在该角度系统中，<code>0</code> 为 y轴正方向，<code>90</code> 为 x轴正方向，<code>+-180</code>为 y轴负方向，<code>-90</code> 为 x轴负方向；</p><p>从y轴正方向顺时针旋转到y轴负方向，则为从 <code>0</code>依次增大到 <code>+180</code><br> 从y轴正方向逆时针旋转到y轴负方向，则为从 <code>0</code>依次减小到 <code>-180</code></p><p><img src="'+c+'" alt="sprite"></p><p>在精灵的配置中，默认 <code>heading</code> 为 <code>0</code>,则默认为在舞台的平面直角坐标系中，朝向为垂直朝上，并且因为其定位原点（sprite origin）在该精灵的左上角，所以小牛即在舞台的第一象限展示</p><p><img src="'+l+'" alt="Alt text"></p><p>而且当我们修改小牛的heading时，也会绕着其定位原点（sprite origin）原点旋转，当heading为90时，小牛朝向为水平向右，将展示在舞台的第四象限</p><p><img src="'+n+'" alt="sprite"></p><h2 id="造型-costume" tabindex="-1"><a class="header-anchor" href="#造型-costume" aria-hidden="true">#</a> 造型(costume)</h2><p>造型可以理解为精灵的一组造型图片，可以在对应的精灵配置文件中的<code>costumes</code>进行配置。</p><h3 id="造型坐标-costume-position" tabindex="-1"><a class="header-anchor" href="#造型坐标-costume-position" aria-hidden="true">#</a> 造型坐标 (costume position)</h3><p>造型原点(costume origin)的初始位置为精灵的定位原点 精灵在配置造型原点(costume origin)时的<code>x</code> <code>y</code>值时也就是在配置 造型原点 离 定位原点(sprite origin) 的在精灵坐标系（sprite-coordinate）中的偏移量，</p><p><img src="'+s+`" alt="坐标系"></p><p>以下展示的为配置精灵的heading为90时的效果，<code>costume position</code>中配置的<code>(x:0,y:0)</code>则表示造型(costume)的中心点离精灵(sprite)的中心点的偏移量，所以在该精灵的配置为0,0的时候，精灵渲染在右下角</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;costumes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;calf-0&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.png&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;costumeIndex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;heading&quot;</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;isDraggable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rotationStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="坐标系"></p><p>而在配置了 造型原点(costume origin)为 <code>x:55</code>,<code>y:50</code> 的情况下,则代表造型原点(costume origin) 在精灵坐标系（sprite-coordinate）中的偏移量 ,也就是说 造型原点(costume origin) 沿着x轴正方向偏移了55个单位，沿着y轴正方向偏移了50个单位，则该造型（costume）因为该设置其造型原点(costume origin)为精灵的中心，且因为该 精灵的定位原点(sprite origin)离舞台原点(stage origin)偏移量，所以小牛展示在了舞台的正中心。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;costumes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;calf-0&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.png&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;costumeIndex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;heading&quot;</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;isDraggable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rotationStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="图片"></p>',40),v=[m];function b(g,q){return p(),e("div",null,v)}const h=a(k,[["render",b],["__file","basic-concept.html.vue"]]);export{h as default};