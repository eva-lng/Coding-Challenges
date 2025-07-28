/* DNA to RNA Conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:
"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

public class Bio {
  public String dnaToRna1(String dna) {
    return dna.replace("T", "U");
  }

  public String dnaToRna2(String dna) {
    String rna = "";
    for (int i = 0; i < dna.length(); i++) {
      char c = dna.charAt(i);
      if (c == 'T') rna += 'U';
      else rna += c;
    }
    return rna;
  }
}