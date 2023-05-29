/* Complementary DNA

 */

function DNAStrand(dna){
    const pairs = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    }
    
    return dna.split('').map(el => pairs[el]).join('');
}