param([string]$targetFile = "test_mhtml.doc")
$filePath = Join-Path $PSScriptRoot $targetFile
$word = New-Object -ComObject Word.Application
$word.Visible = $false
try {
  $doc = $word.Documents.Open($filePath)
  $text = $doc.Content.Text
  Write-Output "EXTRACTED_TEXT: $text"
  $shapeCount = $doc.InlineShapes.Count
  $shapeType = if ($shapeCount -gt 0) { $doc.InlineShapes.Item(1).Type } else { -1 }
  Write-Output "SHAPES_COUNT: $shapeCount"
  Write-Output "SHAPE_TYPE: $shapeType"
  $doc.Close([ref]$false)
} finally {
  $word.Quit()
  [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
}
