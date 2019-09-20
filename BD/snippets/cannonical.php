<?php
$resourceId = $modx-&gt;resource-&gt;get('id');
if (!$resourceId) { return ''; }

$args = '';
if (!empty($scriptProperties['args'])) {
  $args = $scriptProperties['args'];
  if (strpos(ltrim($args), '{') === 0) {
    $args = $modx-&gt;fromJSON($args);
    $args = (is_array($args)) ? $args : '';

    foreach ($args as $k =&gt; $v) {
      if (is_string($k) &amp;&amp; !trim($k) &amp;&amp; is_string($v) &amp;&amp; !trim($v)) {
        unset($args[$k]);
      }
    }
  }
}

$canonicalUrl = $modx-&gt;makeUrl($resourceId, '', $args, 'full');

return '';