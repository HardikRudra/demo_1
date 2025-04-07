import { StyleSheet, Image, Platform } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function FinancialLiteracyScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol size={310} color="#808080" name="dollarsign" style={styles.headerImage} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Financial Literacy</ThemedText>
      </ThemedView>
      <ThemedText>Improve your understanding of money management and investing.</ThemedText>
      
      <Collapsible title="Budgeting Basics">
        <ThemedText>
          Learn how to create a budget, track expenses, and save effectively.
        </ThemedText>
        <ExternalLink href="https://www.investopedia.com/budgeting-basics-5189864">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Collapsible title="Investing 101">
        <ThemedText>
          Understand different types of investments, risk management, and strategies.
        </ThemedText>
        <ExternalLink href="https://www.investopedia.com/investing-4427765">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Collapsible title="Understanding Credit Scores">
        <ThemedText>
          Learn how credit scores work and how to improve yours.
        </ThemedText>
        <ExternalLink href="https://www.experian.com/blogs/understanding-credit-scores/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Collapsible title="Tax Basics">
        <ThemedText>
          Get an overview of taxes, deductions, and filing methods.
        </ThemedText>
        <ExternalLink href="https://www.irs.gov/filing">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Collapsible title="Retirement Planning">
        <ThemedText>
          Plan ahead for a financially secure retirement.
        </ThemedText>
        <ExternalLink href="https://www.ssa.gov/retirement/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
